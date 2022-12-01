
# macheight

# What is it?

macheight is a JavaScript app to find pairs if integers from a list that sum a target value
## Run Locally

Clone the project

```bash
  git clone https://github.com/carlosruizc/macheight
```

Go to the project directory

```bash
  cd macheight
```

Install dependencies (only for version with input prompt)

```bash
  npm install prompt-sync
```

Start the program
## version with input prompt for arguments
```bash
  node macheight.js
```
## version with inline arguments
```bash
node macheight_inline.js
```
# Examples

## version with input prompt for arguments
```bash
> node app.js
> Input the list of numbers: 1,9,5,0,20,-4,12,16,7
> Input the target value: 12
+ 5,7
+ 0,12
+ -4,16
```
## version with inline arguments
```bash
> node macheight_inline.js 1,9,5,0,20,-4,12,16,7 12
+ 5,7
+ 0,12
+ -4,16
```
