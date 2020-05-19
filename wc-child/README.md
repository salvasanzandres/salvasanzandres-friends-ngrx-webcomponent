# Web component sharing ngrx store with host project
- Input form for new friends friend (action to store)
- store retrieved from browser's window (containing friends)
- Friends list displayed (retrieved from store selector)

## Build web component

`el-build` 

1. 1 build will happen to /dist
2. then (polyfills,runtime,main)  concat to one js file
3. then js file moved to main project



## Comments

**Change detection wasn't reacting to async pipe changes** on store selector (changes being made by main project action).
to refresh view instantly had to use **ChangeDetectorRef**
