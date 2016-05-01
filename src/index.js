/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-05-01[19:22:28]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  */
'use strict';

export const queen = n => {
  const N = n;
  const queue = new Array(N);
  const ret = [];

  const isSafe = (col, row) => {
    for (let i = 0; i < col; ++i) {
      if (i === col || queue[i] === row || (col - row) === (i - queue[i]) || (col + row) === (i + queue[i])) {
        return false;
      }
    }
    return true;
  };

  const place = col => {
    let foundSafePos;
    if (N === col) {
      ret.push(queue.slice());
      foundSafePos = true;
    } else {
      let row = 0;
      while (row < N && !foundSafePos) {
        if (isSafe(col, row)) {
          queue[col] = row;
          foundSafePos = place(col + 1);
          if (!foundSafePos) {
            row += 1;
          }
        } else {
          row += 1;
        }
      }
    }
    return foundSafePos;
  };

  for (let j = 0; j < N; ++j) {
    queue[0] = j;
    place(1);
  }

  return ret;

};