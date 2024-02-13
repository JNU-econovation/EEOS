import numpy as np
import pandas as pd
from numpy import dot
from numpy.linalg import norm
import urllib.request
import torch
from pydantic import BaseModel
from typing import List

from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans

from fastapi import APIRouter

#모델 가져오기
model_path = './models'
model = SentenceTransformer(model_path)


sbert = APIRouter(prefix='/sbert')

# 경로 설정
@sbert.get('/')
async def start_sbert():
    return {'message' : "sbert is starting"}

class Item(BaseModel) :
    name: str
    sentence : str

class Item_and_num(BaseModel) :
    participantResponses : List[Item]
    maxTeamSize : int

@sbert.post('/team-building')
async def start_sbert(data:Item_and_num):
    
    input = data.items
    min_num = data.teamMin
    max_num = data.teamMax
    

    # 문장 임베딩
    corpus = [Item.sentence for Item in input]
    corpus_embeddings = model.encode(corpus, convert_to_tensor = True)

    # 클러스터링
    from sklearn.cluster import KMeans

    num_clusters = 4
    clustering_model = KMeans(n_clusters=num_clusters)
    clustering_model.fit(corpus_embeddings.cpu())
    cluster_assignment = clustering_model.labels_

    clustered_sentences = [[] for i in range(num_clusters)]
    for sentence_id, cluster_id in enumerate(cluster_assignment):
        clustered_sentences[cluster_id].append(corpus[sentence_id])


    cluster_list = list()

    for i, cluster in enumerate(clustered_sentences):
        cluster_list.append(cluster)


    # 인원 조절
    copy_list = list()
    for i in cluster_list :
        copy_list.append(i)

    # 최대인원을 넘겼을 때 잘라버리기
    st_len = len(copy_list)

    for i in range(st_len):
        if len(copy_list[i]) > max_num :
            copy_list.append(copy_list[i][:(len(copy_list[i])//2)])
            copy_list.append(copy_list[i][(len(copy_list[i])//2):])
            copy_list[i]=[]

    while [] in copy_list:
        copy_list.remove([])

    return copy_list
