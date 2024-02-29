# EEOS-AI

- sentence-bert의 문장 임베딩을 사용하여 문장 간 유사도를 계산, 군집화를 시켜주는 팀 매칭 AI입니다.

## models

- 모델의 학습 결과가 저장된 폴더

### - data

- [KLUE](https://github.com/KLUE-benchmark/KLUE/tree/main/klue_benchmark) (STS)
- [kor-STS](https://github.com/kakaobrain/kor-nlu-datasets) (STS)

## Installation

```python
git clone https://github.com/JNU-econovation/black-company.git
cd AI
pip install -r requirements.txt
```

## Usage

- aws 서버 내 백그라운드 실행을 위한 코드

```python
cd AI
nohup uvicorn main:app --reload --port=8080 --host=0.0.0.0
```
