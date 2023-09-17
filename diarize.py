from pyannote.database.util import load_rttm
from pyannote.core import Segment, notebook
from pyannote.audio import Pipeline
from pyannote.audio import Audio 
from huggingface_hub import notebook_login
import numpy as np

timestamps = np.asarray([0, 3540, 4110, 4200, 6590, 7160, 7280, 7340, 7460, 7670, 7730, 7790, 7850, 7880, 7910, 8030, 8450, 9890, 9920, 10040, 10100, 10280, 10370, 10490, 10610, 10670, 10880, 15770, 15830, 16400, 16430])
timestamps = timestamps / 1000

transcripts = ['okay', 'okay', 'okay', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope this', ' I hope this is', ' I hope this is working', ' I hope this is', ' I hope this is working', ' I hope this is working', ' I hope this is working', ' I hope this is working', ' I hope this is working', ' I hope this is working good', ' I hope this is working good to', ' I hope this is working good to see', ' I hope this is working good to see that', ' exit', ' exit', 'exit']

timestamps_speaker = []
speakers = []

pipeline = Pipeline.from_pretrained('pyannote/speaker-diarization', use_auth_token="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")
diarization = pipeline("../Test-Sanya.wav", num_speakers=2)
print(diarization.labels())
for speaker in diarization.labels():
    times = diarization.label_timeline(speaker)
    for time in times:
        print(speaker, time)
        print(time.start)
        timestamps_speaker.append(time.start)
        speakers.append(speaker)

print(timestamps_speaker)
print(speakers)

index = np.argsort(timestamps_speaker)
print(index)
print(np.asarray(timestamps_speaker)[index])
print(np.asarray(speakers)[index])

i = 0
sporder = []

for time in timestamps:
    if i < len(timestamps_speaker)-1:
        if time < timestamps_speaker[i+1]:
            print(speakers[i])
            sporder.append(speakers[i])
        else:
            i += 1
            print(speakers[i])
            sporder.append(speakers[i])
    else:
        print(speakers[i])
        sporder.append(speakers[i])

print(sporder)
order = {}
for i in range(len(sporder)-1):
    if sporder[i] != sporder[i+1]:
        order[sporder[i]] = transcripts[i-2]
        print(i)

last = sporder[-1]
if last not in order:
    order[last] = transcripts[-1]

print(order)
