Voilà les étapes pour installer notre application :

git clone git@github.com:MrRoulian/projet_bibliotheque_back.git projet-back-BAILLY-BELLAHCENE
yarn install

git clone git@github.com:MrRoulian/projet_bibliotheque_front.git projet-front-BAILLY-BELLAHCENE
yarn install

run mongodb server
sur robot3t créer une database alb sur la connection par défaut (127.0.0.1:27017) (ou bien changer le fichier de config présent à projet-back/config/default.yml)
créer la collection albums dedans et copier coller le script d'insertion d'album dans cette collection (le fichier est présent dans le dossier script à la racine du projet back)

run le projet back-end (yarn run start) (vous trouverez la doc sur localhost:3000/documentation, vous pouvez configuer cela dans le fichier config vu plus haut)
puis run le projet front-end (yarn run start) (vous trouverez le site sur localhost:4200 configurable dans le fichier projet-front/src/environments.ts)