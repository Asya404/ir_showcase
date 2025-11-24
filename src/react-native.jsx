// import React from 'react';


// export const buildAnyNativeComponent = (renderAs = 'div') => ({ children, style }) => React.createElement((
//     < style={style}>
//         {children}
//     </>);
// );

export const View = ({ children, style }) => (
    <div style={style}>
        {children}
    </div>
);
export const ScreenView = ({ children, style }) => (
    <div style={style}>
        {children}
    </div>
);

export const Text = ({ children, style }) => (
    <span style={style}>
        {children}
    </span>
);

export const Button = ({ children, title, style }) => (
    <button style={style}>
        {title} {children}
    </button>
);


export const StyleSheet = {
    create(styles) {
        return styles;
    },
}

export const StatusBar = ({ backgroundColor, barStyle }) => {
    const statusBarStyle = {
        height: '20px',
        backgroundColor: backgroundColor || 'transparent',
        position: 'relative'
    };

    return (
        <div style={statusBarStyle}>
            {/* Additional styles based on barStyle can be applied here */}
        </div>
    );
};

export function useColorScheme() {
    return {};
}

export default { v: 2 }