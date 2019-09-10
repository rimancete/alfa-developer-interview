# DEVELOPER INTERVIEW

Este teste tem como objetivo não apenas enteder o conhecimento técnico do candidato com linguagem A, B ou C, mas também sua capacidade de:
* ***ler documentações***
* ***entender e executar o que está sendo solicitado***
* ***solucionar problemas***
* ***organizar o código***

Além de é claro ***conhecer a qualidade, legibilidade do código, as suas escolhas técnicas e a lógica utilizada***.

Para enviar seu teste basta forkar esse repositório e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o teste, submeta um pull request.


# VAMOS LÁ?

### [OData.org](https://www.odata.org/)
>**OData (Open Data Protocol)** é um padrão OASIS aprovado pela ISO / IEC que define um conjunto de práticas recomendadas para criar e consumir APIs RESTful. 

>O **OData** ajuda você a se concentrar na lógica de negócios enquanto cria APIs RESTful sem se preocupar com as várias abordagens para definir cabeçalhos de solicitação e resposta, códigos de status, métodos HTTP, convenções de URL, tipos de mídia, formatos de carga útil, opções de consulta etc. 

>O **OData** também fornece orientação para rastrear alterações, definir funções / ações para procedimentos reutilizáveis e enviar solicitações assíncronas / em lote.

Usando uma linguagem de programação de sua preferência, consuma os dados [deste serviço padrão OData](https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/) executando as operações:

Referência [OData Services](https://www.odata.org/odata-services/)

- [ ] Consultar ***nome*** e ***sobrenome*** das ***pessoas*** com ***nome de usuário*** que contenha ***Henry***
- [ ] ***Incluir*** uma pessoa
- [ ] ***Excluir*** a pessoa que você incluiu acima
- [ ] Consultar todos os aeroportos que o ***endereço da localização*** contenha a palavra 'District'


#### QUESTÕES EXCLUSIVAS PARA DESENVOLVEDORES ADVPL

***1.*** Qual a finalidade dos arquivos abaixo no Protheus:
- SX1 
- SX2
- SX3 
- SIGAMAT.EMP
- SIGAADV.PSS 


***2.*** Descreva, de forma breve, como criar um ambiente de testes, a partir de um ambiente de produção já em uso. Este ambiente de testes deve utilizar um banco de dados próprio (não pode utilizar o banco de dados da produção).


***3.*** Como fazemos para consultar, instalar ou desinstalar Stored Procedures fornecidas pela Totvs ?


***4.*** Para que servem as chaves abaixo, no arquivo APPSERVER.INI ?
* [PRODUCAO]	 
* SourcePath=C:\Protheus_12_v16\apo	 
* RootPath=C:\Protheus_12_v16\protheus_data	 
* StartPath=\system\	 
* RpoDb=Top	 
* RpoLanguage=portuguese	 
* RpoVersion=120	 
* LocalFiles=ctree	 
* localdbextension=.dtc	 
* RegionalLanguage=BRA	 
* helpserver=help.outsourcing.com.br/p11	 
* TOPMEMOMEGA=1	 
* TopDataBase=MSSQL	 
* TopServer=localhost	 
* TopALIAS=PROTHEUSV12	 


***5.*** Descreva o que significa cada parte do código:
```ADVPL
Processa({||U_GPT(Cod)},"A executar")
```
* Processa	 
* {||}	  	 
* U_GPT	 
* Cod	 
* "A executar"	 
 	 
***6.*** Qual é o erro do programa abaixo e como corrigí-lo?
```ADVPL
User Function Exemplo()
Local cPar := “Teste”
Modifica(cPar)//a função Modifica() deve alterar o valor de cPar
Return(cPar)
```

***7.*** O que o programa abaixo faz?
```ADVPL
If SB1->B1_TIPO $ "PA/MC/"
 
   SB0->(DBSetOrder(1))
 
   If SB0->(DBSeek(xFilial("SB0")+SB1->B1_COD))
 
      RecLock("SB0",.F.)
 
      SB0->B0_PRV1 := SB1->B1_PRV1
 
      MsUnLock("SB0")
 
   Else 
 
      RecLock("SB0",.T.)                  
 
      SB0->B0_COD  := SB1->B1_COD    
 
      SB0->B0_PRV1 := SB1->B1_PRV1    
 
      MsUnLock("SB0")
 
   EndIf
 
EndIf
```

