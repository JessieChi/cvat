// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/lib/button';

interface Props {
    activatedStateID: number | null;
    visible: boolean;
    left: number;
    top: number;
    onPointDelete(): void;
}

export default function CanvasPointContextMenu(props: Props): JSX.Element | null {
    const {
        onPointDelete,
        activatedStateID,
        visible,
        left,
        top,
    } = props;

    if (!visible || activatedStateID === null) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className='cvat-canvas-point-context-menu' style={{ top, left }}>
            <Button type='link' icon='delete' onClick={onPointDelete}>
                Delete point
            </Button>
        </div>,
        window.document.body,
    );
}
