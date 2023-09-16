from pyannote.database.util import load_rttm
from pyannote.core import Segment, notebook
from pyannote.audio import Pipeline
from pyannote.audio import Audio 
from huggingface_hub import notebook_login
import numpy as np

timestamps = []
timestamps_speaker = []
speakers = []

pipeline = Pipeline.from_pretrained('pyannote/speaker-diarization', use_auth_token="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")
diarization = pipeline("../muffin convo.wav")
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
