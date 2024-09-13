import subprocess



def run_command(command):
    # Start the subprocess
    command = command.split(' ')
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

# Example usage
command = ["ipconfig"]  # Replace with your desired command

# Define the PowerShell command you want to run
command = ["powershell", "-Command", "Get-Process"]
cmd = r'''powershell expand-archive -Force C:\Users\L16\Desktop\frankie.zip C:\Users\L16\Desktop\frankie2'''

cmd = r'''scp root@www.boxyweb.fun:/root/frankie.zip C:\Users\L16\Desktop\frankie.zip'''
command = cmd.split(' ')
run_command(command)