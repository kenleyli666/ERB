// hollowCube.js

function createHollowCube(size, opacity, edgeColor) {
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000	, transparent: true, opacity: opacity }); // 半透明材质
    const cubeGeometry = new THREE.BoxGeometry(size, size, size); // 创建一个尺寸为size的正方体
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // 创建正方体网格
    const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry); // 获取正方体的边缘几何体
    const edgesMaterial = new THREE.LineBasicMaterial({ color: edgeColor }); // 不透明的边框材质
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial); // 创建边框对象

    return { cube, edges }; // 返回正方体和边框
}

// 初始化 Three.js 场景
function init() {
    const containers = document.getElementsByClassName('cube-container');
    for (let i = 0; i < containers.length; i++) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, containers[i].offsetWidth / containers[i].offsetHeight, 0.1, 1000);
        camera.position.z = 2;
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(containers[i].offsetWidth, containers[i].offsetHeight);
        containers[i].appendChild(renderer.domElement); // 将渲染器的 DOM 元素添加到当前容器
        const { cube, edges } = createHollowCube(0.5, 0.2, 0xFF0000);
        scene.add(cube); // 将正方体添加到场景中
        scene.add(edges); // 将边框添加到场景中
        function animate() {
            requestAnimationFrame(animate); // 请求下一帧
            cube.rotation.x += 0.01; // 沿 X 轴旋转
            cube.rotation.y += 0.01; // 沿 Y 轴旋转
            edges.rotation.x = cube.rotation.x; // 设置边框的旋转跟随正方体
            edges.rotation.y = cube.rotation.y; // 设置边框的旋转跟随正方体
            renderer.render(scene, camera); // 渲染场景
        }
        animate();
        window.addEventListener('resize', () => {
            // const width = containers[i].innerWidth;
            // const height = containers[i].innerHeight;
            renderer.setSize(width, height); // 更新渲染器大小
            camera.aspect = width / height; // 更新相机的纵横比
            camera.updateProjectionMatrix(); // 更新相机投影矩阵
        });
    }
}
document.addEventListener('DOMContentLoaded', init);