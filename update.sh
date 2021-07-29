# Update backend
git stash
git pull
npm install

# Update frontend
if [ ! -d "./madhouse-token-frontend" ]
then # Clone frontend
  git clone https://github.com/Tiqur/madhouse-token-frontend.git
fi

cd ./madhouse-token-frontend
git stash # Stash local repo
git pull # Update local repo
npm install # Update local node modules if necessary
npm run build # Create optimized build for production

node index.js
