import os
import subprocess
cmd=''

pc='L14'

def runcmd(cmd):
    # os.popen(cmd).read()

    # Start the subprocess
    command = cmd.split(' ')
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    # Continuously read output and error streams
    while True:
        # Read a line from stdout
        output = process.stdout.readline()
        if output:
            print(f"Output: {output.strip()}")
        
        # Read a line from stderr (error output)
        error = process.stderr.readline()
        if error:
            print(f"Error Output: {error.strip()}")
        
        # Break the loop if the process has finished
        if output == '' and error == '' and process.poll() is not None:
            break
    
    # Ensure any remaining output is captured
    remaining_output, remaining_error = process.communicate()
    if remaining_output:
        print(f"Output: {remaining_output.strip()}")
    if remaining_error:
        print(f"Error Output: {remaining_error.strip()}")

    # Get the return code
    return_code = process.wait()
    print(f"Process finished with return code: {return_code}")

def uploadsublimetext():
    cmd=r'''powershell Compress-Archive -Path "C:\Users\L16\Desktop\SublimeText\*" -DestinationPath "C:\Users\L16\Desktop\SublimeText.zip"'''
    runcmd(cmd)
    cmd=r'''scp "C:\Users\L16\Desktop\SublimeText.zip" root@www.boxyweb.fun:/root/SublimeText.zip'''
    runcmd(cmd)
def donwloadsublimetext():
    cmd=r'''scp root@www.boxyweb.fun:/root/SublimeText.zip "C:\Users\L16\Desktop\SublimeText.zip" '''
    runcmd(cmd)
    cmd=r'''powershell expand-archive "C:\Users\L16\Desktop\SublimeText.zip" C:\Users\L16\Desktop\SublimeText2'''
    runcmd(cmd)
def uploadpdf():
    # https://docs.google.com/document/d/1dNHovOz5JR4q4IOeI0iKCG59lIE-QGHH5fzEd_fDOMU/edit?usp=drivesdk
    cmd=r'''scp C:\Users\L16\Desktop\frankie\前端網站開發人員證書課程.pdf root@www.boxyweb.fun:/root/前端網站開發人員證書課程.pdf'''
    runcmd(cmd)
def downloadpdf():
    cmd=r'''scp root@www.boxyweb.fun:/root/前端網站開發人員證書課程.pdf C:\Users\L16\Desktop\前端網站開發人員證書課程.pdf'''
    runcmd(cmd)



def uploadfrankie():
    cmd = r'''powershell Compress-Archive -Force -Path "C:\Users\L16\Desktop\frankie\*" -DestinationPath "C:\Users\L16\Desktop\frankie.zip"'''
    runcmd(cmd)
    cmd = r'''scp C:\Users\L16\Desktop\frankie.zip root@www.boxyweb.fun:/root/frankie.zip'''
    runcmd(cmd)


def downlaodfrankie():
    cmd = fr'''scp root@www.boxyweb.fun:/root/frankie.zip C:\Users\{pc}\Desktop\frankie.zip'''
    runcmd(cmd)
    cmd = fr'''powershell expand-archive -Force C:\Users\{pc}\Desktop\frankie.zip C:\Users\{pc}\Desktop\frankie2'''
    runcmd(cmd)


# uploadfrankie()
downlaodfrankie()