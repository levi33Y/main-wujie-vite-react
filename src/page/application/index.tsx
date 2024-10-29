import { message } from "antd";
import * as React from "react";
import { Fragment, useEffect, useMemo, useState } from "react";

const RENDERERMAX = 200000;

const RENDERERLIMIT = 500;

const Circle = () => {
  function getColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return "rgba(" + r + "," + g + "," + b + ",0.8)";
  }

  const style = useMemo(() => {
    return {
      background: getColor(),
    };
  }, []);

  return <span style={style} className="w-4 h-4 flex-shrink-0" />;
};

const Container = ({ show }: { show: boolean }) => {
  const [info, setInfo] = useState<{
    dataList: number[];
    renderList: React.ReactNode[];
  }>({
    dataList: new Array(RENDERERMAX).fill(1),
    renderList: [],
  });

  function renderNewList(index: number) {
    const list = info.dataList.slice(
      (index - 1) * RENDERERLIMIT,
      index * RENDERERLIMIT
    );

    return (
      <Fragment key={index}>
        {list.map((_, index) => (
          <Circle key={index} />
        ))}
      </Fragment>
    );
  }

  function toRenderList(index: number) {
    if (!index || index > Math.ceil(RENDERERMAX / RENDERERLIMIT)) return;

    // [纯函数](https://zh-hans.react.dev/learn/keeping-components-pure#side-effects-unintended-consequences)
    setInfo((prev) => ({
      ...prev,
      renderList: [...prev.renderList, renderNewList(index)],
    }));

    requestIdleCallback(() => {
      toRenderList(++index);
    });
  }

  // [useEffect](https://zh-hans.react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts)
  useEffect(() => {
    if (show) toRenderList(1);
  }, [show]);

  return (
    <div className="flex flex-wrap">
      {/*{info.renderList.map((_, index) => (*/}
      {/*  <Circle position={info.position} key={index} />*/}
      {/*))}*/}

      {info.renderList}
    </div>
  );
};

export const Application = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="pb-10 flex gap-4">
        <button onClick={() => setShow(true)}>执行长任务</button>
        <button onClick={() => message.success("点击了Other")}>Other</button>
      </div>
      <Container show={show} />
    </>
  );
};
