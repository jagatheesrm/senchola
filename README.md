# Getting Started!

## Clone the Repository

    git clone https://github.com/jagatheesrm/senchola-pro.git

    cd senchola-pro

## Set User Name

    git config --global user.name "Your Name"

## Set Email Address

    git config --global user.email "your.email@example.com"

## List Branches:

    git branch

## Check Current Branch:

    git rev-parse --abbrev-ref HEAD

## Switch to the Test-Push Branch

    git checkout test-push


## Pull Changes from the Main Branch

    git pull origin main

## Make Changes and Commit

    git add .
    git commit -m "Description of the changes in the test-push branch"

## Push Changes to Remote (Test-Push Branch)

    git push origin test-push

# Test (test-Push) Branch

## Clone the Repository with the Test-Push Branch:

    git clone -b test-push https://github.com/jagatheesrm/senchola-pro.git

    cd senchola-pro

## List Branches:

    git branch

## Check Current Branch:

    git rev-parse --abbrev-ref HEAD

<!-- ## Create and Switch to the Test-Project Branch:
    git checkout -b test-project
    -->

## Switch to the Test-Push Branch

    git checkout test-project

## Pull Changes from the Test-Push Branch

    git pull origin test-push

## Make Changes and Commit

    git add .

    git commit -m "Description of the changes in the test-project branch"

## Push Changes to Remote (Test-Project Branch)

    git push origin test-project

## Clone the Repository with the Test-Project Branch

    git clone -b test-project https://github.com/jagatheesrm/senchola-pro.git

## Navigate into the Project Directory

    cd senchola-pro

## Switch to the Main Branch:

    git checkout -b main origin/main

## Pull Changes from the Main Branch (Optional):

    git pull origin main

## Make Changes and Commit:

    git add .
    git commit -m "Description of the changes in the main branch"

## Push Changes to Remote (Main Branch):

    git push origin main


# To deploy a React.js project

## Create a production build:
    npm run build

## Deploy to GitHub Pages:
    npm run deploy
