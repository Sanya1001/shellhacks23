from pyannote.database.util import load_rttm
from pyannote.core import Segment, notebook
from pyannote.audio import Pipeline
from pyannote.audio import Audio 
from huggingface_hub import notebook_login

pipeline = Pipeline.from_pretrained('pyannote/speaker-diarization', use_auth_token="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")
diarization = pipeline("muffin convo.wav")
print(diarization.labels())
for speaker in diarization.labels():
    print(diarization.label_timeline(speaker), min_speakers=2, max_speakers=4)