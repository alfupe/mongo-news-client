import { Skeleton } from 'antd';
import React from 'react';

const NewsSkeleton = ({fetching, children}) => fetching ? <Skeleton active /> : children;

export default NewsSkeleton;
