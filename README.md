Voil� les �tapes pour installer notre application :

git clone git@github.com:MrRoulian/projet_bibliotheque_back.git projet-back-BAILLY-BELLAHCENE
yarn install

git clone git@github.com:MrRoulian/projet_bibliotheque_front.git projet-front-BAILLY-BELLAHCENE
yarn install

run mongodb server
sur robot3t cr�er une database alb sur la connection par d�faut (127.0.0.1:27017) (ou bien changer le fichier de config pr�sent � projet-back/config/default.yml)
cr�er la collection albums dedans et copier coller le script d'insertion d'album dans cette collection (le fichier est pr�sent dans le dossier script � la racine du projet back)

run le projet back-end (yarn run start) (vous trouverez la doc sur localhost:3000/documentation, vous pouvez configuer cela dans le fichier config vu plus haut)
puis run le projet front-end (yarn run start) (vous trouverez le site sur localhost:4200 configurable dans le fichier projet-front/src/environments.ts)