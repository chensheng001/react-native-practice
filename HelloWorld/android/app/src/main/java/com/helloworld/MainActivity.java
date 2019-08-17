package com.helloworld;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    // ----------默认

    @Override
    protected String getMainComponentName() {
        return "HelloWorld";
    }


    // 为了完成 react-native-gesture-handler在 Android 上的安装，请确保在 MainActivity.java 上完成如下修改：
    /*
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
    */
}
