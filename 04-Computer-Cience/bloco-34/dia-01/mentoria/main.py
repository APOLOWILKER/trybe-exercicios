'''
PERSONAGEM
  +NOME: string
  +ESPECIE: string
  -PESO: float
  -ALTURA: float
  -HP: int
'''

class Personagem: 
  ''' Modela um personagem'''
  def __init__(self, nome, especie, peso, altura, hp ): # new
      self.nome = nome
      self.especie = especie
      self.__peso = peso
      self.__altura = altura
      self.__hp = hp
    
  def get_peso(self):
      self.__peso
  
  def get_altura(self):
        return self.__altura

  def get_hp(self):
        return self.__hp