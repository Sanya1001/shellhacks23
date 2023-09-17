import pyaudio
import wave
import numpy as np

CHUNK = 2048
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100  # You can adjust the sample rate as needed
RECORD_SECONDS = 5  # Adjust the recording duration as needed
OUTPUT_FILENAME = "recorded_audio.wav"
device_index = 2

audio = pyaudio.PyAudio()

print("----------------------record device list---------------------")
info = audio.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
        if (audio.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print("Input Device id ", i, " - ", audio.get_device_info_by_host_api_device_index(0, i).get('name'))

print("-------------------------------------------------------------")

index = int(input())

# Configure and open the microphone stream
stream = audio.open(format=FORMAT, channels=CHANNELS,
                rate=RATE, input=True,input_device_index = index,
                frames_per_buffer=CHUNK)

print("Recording...")

frames = []

for _ in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("Recording stopped.")

# Close the microphone stream
stream.stop_stream()
stream.close()
audio.terminate()

# Save the recorded audio as a WAV file
with wave.open(OUTPUT_FILENAME, "wb") as wf:
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(audio.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))

print(f"Audio saved as {OUTPUT_FILENAME}")
