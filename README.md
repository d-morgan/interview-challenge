# Feedr Technical Challenge

## Thoughts and further work
- I haven't implemented any formal tests for this task although in practice you would want to check things like the items format is adhered to, the counter correctly increments, items can be added and removed correctly. 
- I have used react state as opposed to redux or react hooks. I likely wouldn't do this in practice but due to the size of the task, it wasn't an issue. Initially I was going to use the react hook 'useState' but realised the react version was not modern enough to allow for this so I modified some of the components to become class-based
- There is room to potentially break the App file into even more subcomponents but due to the size of the project, it's probably not necessary here. I just tried to isolate any of the specific 'moving parts' into their own component files.
- I haven't made any styling changes but in practice I would try to improve the UI 