import React from 'react';
import './flex.scss';

const Flex = props => {
    const getClassName = props => {
        const classNames = ['flex'];

        if (props.justifyContent=== 'start') classNames.push('flex--jc-start');
        if (props.justifyContent === 'center') classNames.push('flex--jc-center');
        if (props.justifyContent === 'end') classNames.push('flex--jc-end');
        if (props.direction === 'row') classNames.push('flex--fd-row');
        if (props.direction === 'column') classNames.push('flex--fd-column');

        return classNames.join(' ');
    };

    return <div className={getClassName(props)}>{props.children}</div>
};

Flex.defaultProps = {
    justifyContent: 'flex-start',
    direction: 'row'
};

export default Flex;
