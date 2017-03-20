## Objective

The application config file became too huge to a point that we had hard time to maintain it so the goal is to:
* split up config file
* make config available anywhere in the app (both inside and outside Angular)
* be able to update config by just updating variable values
* be able to work with other projects with ease by plugging these files in
* integrate with Grunt and can easily switch config between different evironments

**Note**: Most changes were made in **./config** directory

## Installation

**Install repo**:

```
jerrylauky$> mkdir angularjs-dynamic-config && cd angularjs-dynamic-config && git clone <this-repo-here>.git .
```

**Install dependencies**:

```
jerrylauky$> npm install && bower install
```

**Run app**:

```
jerrylauky$> grunt dev
```

**Build with file compression and run app**:

```
jerrylauky$> grunt prod:run
```



Feel free to leave comments to let me know if there's anything else I can improve on this.
