# Password Totem - Você na vez ⬆.

Um gerenciador de filas baseado em prioridades de senha e geração de relatórios. 

![image](https://user-images.githubusercontent.com/48100276/194646976-2ac7a568-87c0-45b9-a65f-c95d20d7716e.png)


## Sumário 📒: 

- [Proposta](#proposta-)
- [Screenshots](#screenshots-)




### Proposta 📝: 

- Ferramenta para apoio à gestão de atendimento ao usuário. Geralmente conhecido como sistema de "chamados".
- Como característica da fila haverão 3 tipos de senhas definidos de conforme a priorização do atendimento. 
- O atendimento possui um tempo de retenção do cliente no guichê, sendo calculado pela média do tempo desprendido no atendimento ao cliente para cada tipo de senha.
- Há de se ressaltar que a cada novo serviço de atendimento deverá ser chamada uma nova senha de prioridade diferente daquela chamada anteriormente. De acordo com o diagrama abaixo:

    - [SP] -> [SE|SG] -> [SP] -> [SE|SG]  

           SP: Senha prioritária
           SE: Senha para Exames
           SG: Senha geral
    
- Neste modelo não importando quantas senhas SG (Senha geral) estejam na fila, sempre serão atendidas, por ordem, uma senha SP (Senha prioritária), caso exista na fila, em seguida uma senha SE (Senha exames), caso também exista na fila, para enfim, ser atendida uma senha SG, até que todas as filas sejam encerradas ou o expediente encerre. 
- O painel de chamados sempre consta a informação das 5 últimas senhas chamadas. 
- Cada senha atendida aprensenta uma numeração que segue o modelo YYMMDD-PPSQ, onde: 
 
       YY: Ano da emissão, com dois dígitos
       MM: Mês do ano da emissão, com dois dígitos
       DD: Dia do mês da emissão, com dois dígitos
       PP: Tipo da senha com dois caracteres
       SQ: Sequência da senha por prioridade, reinício diário
       
- Também é emitido relatório diário e mensal, contendo: 
        
    - Quantitativo geral das senhas emitidas.
    - Quantitativo geral das senhas atendidas.
    - Quantitativo das senhas emitidas, por prioridade.
    - Quantitativo das senhas atendidas, por prioridade.
    - Relatório detalhado das senhas contendo, numeração,
    tipo de senha, data e hora da emissão e data e hora do
    atendimento, guichê responsável pelo SA, caso não tenha
    sido atendida estes últimos campos ficarão em branco.
    - Relatório do TM, que devido à variação aleatória no
    atendimento poderá mudar.
    
    
    
 ### Screenshots 🖼:
 
 ![image](https://user-images.githubusercontent.com/48100276/194645649-0062d3f8-04a0-41d3-9c8f-c55034f3d5cf.png)

 
      
