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
    item_list : List[Item]
    min_n : int
    max_n : int

@sbert.post('/clustering')
async def start_sbert(data:Item_and_num):
    
    input = data.item_list
    min_num = data.min_n
    max_num = data.max_n
    

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

    # 하나인 것끼리 묶어준다.
    st_len = len(copy_list)

    one_list =[]
    for i in range(st_len) :
        if len(copy_list[i]) == 1 :
            one_list += copy_list[i]
            copy_list[i] = []

    copy_list.append(one_list)


    # min_num보다 작은 애들끼리 더해줌
    st_len = len(copy_list)

    for i in range(st_len-1):
        for j in range(1, st_len-i-1):
            team_check = copy_list[i] + copy_list[i+j]
            # print(team_check)
            if (len(team_check) <= max_num) and (len(team_check) >= min_num):

                copy_list.append(team_check)
                copy_list[i+j] = []
                copy_list[i] = []

    while [] in copy_list:
        copy_list.remove([])

    for i in range(len(copy_list)):
        for j in range (len(copy_list[i])):
            target_value = copy_list[i][j]
            for Item in input :
                if Item.sentence == target_value :
                    copy_list[i][j] = Item.name

    return copy_list