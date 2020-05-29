hugo # compile all files
git add . #add all new generated files

CURRENTDATE=`date +"%m/%d/%Y %H:%M"`
git commit -am "Deploy ${CURRENTDATE} 🚀"
git push origin master # deploy to git 
