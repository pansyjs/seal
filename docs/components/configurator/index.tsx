/**
 * compact: true
 * inline: true
 */
import { useRef, useState, useEffect } from 'react';
import { Button, Alert, Space, message } from 'antd';
import Card from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormColorPicker,
  ProFormDigit,
  ProFormSwitch,
  ProFormDependency,
} from '@ant-design/pro-form';
import { useClipboard } from 'use-clipboard-hook';
import {
  Seal,
  defaultOpts,
  defaultTextOpts,
  defaultInnerBorderOpts,
  defaultBorderOpts,
  defaultFiveStarOpts,
  defaultSerNoOpts,
  defaultSubTextOpts,
  defaultCenterTextOpts,
  defaultInnerLoopLineOpts,
} from '@pansy/seal';
import styles from './index.less';

import type { ProFormInstance } from '@ant-design/pro-form';

const sealTypeEnum = {
  company: '公司公章',
  personal: '个人私章'
};

const sealShapeEnum = {
  circle: '圆形',
  personal: '椭圆',
  ellipse: '方形'
};

const initialValues = {
  ...defaultOpts,
  border: {
    ...defaultBorderOpts,
    color: defaultOpts.color,
  },
  innerBorder: {
    ...defaultInnerBorderOpts,
    color: defaultOpts.color,
  },
  innerLoopLine: {
    ...defaultInnerLoopLineOpts,
    color: defaultOpts.color,
  },
  fiveStar: {
    ...defaultFiveStarOpts,
    color: defaultOpts.color,
  },
  text: {
    ...defaultTextOpts,
    text: '超级无敌爱国创新科技有限公司',
    color: defaultOpts.color,
  },
  subText: {
    ...defaultSubTextOpts,
    text: '合同专用章',
    color: defaultOpts.color,
  },
  centerText: {
    ...defaultCenterTextOpts,
    text: '测试文案',
    color: defaultOpts.color,
  },
  serNo: {
    ...defaultSerNoOpts,
    text: '01234566667890',
    color: defaultOpts.color,
  },
}

export default () => {
  const sealRef = useRef<Seal>();
  const sealContainerRef = useRef<HTMLDivElement>(null);
  const { copy } = useClipboard();

  const formRef = useRef<ProFormInstance>();

  const [options, setOptions] = useState<Record<string, any>>(initialValues);

  useEffect(
    () => {
      if (sealContainerRef.current) {
        if (!sealRef.current) {
          sealRef.current = new Seal(sealContainerRef.current, options);
          return;
        }

        sealRef.current.update(options);
      }
    },
    [sealContainerRef, options]
  );

  const handlerChangeColor = (color: string) => {
    const form = formRef.current;

    if (!form) return;

    form.setFieldsValue({
      border: {
        color: color,
      },
      innerBorder: {
        color: color,
      },
      innerLoopLine: {
        color: color,
      },
      fiveStar: {
        color: color,
      },
      text: {
        color: color,
      },
      subText: {
        color: color,
      },
      serNo: {
        color: color,
      },
    });
  }

  const handleCopy = () => {
    formRef.current?.getFieldsValue();

    if (!formRef.current) return;
    const values =  formRef.current.getFieldsValue();
    copy(`const sealConfig= ${JSON.stringify(values)};`);
    message.success('拷贝成功');
  }

  const handleFormChange = (values: Record<string, any>) => {
    setOptions(values);
  }

  const handleDownload = () => {
    if (!sealRef.current) return;

    sealRef.current.toBase64();
  }

  return (
    <div className={styles.main}>
      <Alert message="注意！注意！注意！本库只为个人研究学习所用，请勿用于违法相关！" type="error" />
      <br />
      <Card split="vertical" headerBordered bordered style={{ height: '100%'}}>
        <Card colSpan="400px" layout="center">
          <div ref={sealContainerRef} />
        </Card>
        <Card
          title="配置面板"
          extra={
            <Space>
              <Button type="link" size="small" onClick={handleDownload}>下载印章</Button>
              <Button type="link" size="small" onClick={handleCopy}>拷贝配置</Button>
            </Space>
          }
          bodyStyle={{
            overflow: 'auto',
            height: 'calc(100vh - 310px)',
            minHeight: 300
          }}
        >
          <ProForm
            submitter={false}
            onValuesChange={(_, allValues) => {
              handleFormChange(allValues);
            }}
            formRef={formRef}
            initialValues={initialValues}
          >
            <ProForm.Group title="基本配置">
              <ProFormSelect
                label="印章类型"
                name="type"
                valueEnum={sealTypeEnum}
              />

              <ProFormSelect
                label="印章形状"
                name="shape"
                valueEnum={sealShapeEnum}
              />

              <ProFormSwitch
                label="显示透明背景"
                name="showTransparent"
              />

              <ProFormColorPicker
                name="color"
                label="印章颜色"
                tooltip="改变颜色会同步修改以下所有颜色"
                fieldProps={{
                  onChange: handlerChangeColor
                }}
              />

              <ProFormDigit disabled name="width" label="画布宽度" />

              <ProFormDigit disabled name="height" label="画布高度" />
            </ProForm.Group>

            <ProForm.Group title="边线配置">
              <ProFormSwitch
                label="是否显示"
                name={['border', 'visible']}
              />
              <ProFormColorPicker
                name={['border', 'color']}
                label="颜色"
              />
              <ProFormDigit
                name={['border', 'width']}
                label="线宽"
                min={1}
              />

              <ProFormDigit
                name={['border', 'radius']}
                tooltip="半径不能超过画布宽高，并且包含线条宽度"
                label="半径"
                min={100}
                max={150}
              />
            </ProForm.Group>

            <ProForm.Group title="内边线配置">
              <ProFormSwitch
                label="是否显示"
                name={['innerBorder', 'visible']}
              />
              <ProFormColorPicker
                name={['innerBorder', 'color']}
                label="颜色"
              />
              <ProFormDigit
                name={['innerBorder', 'width']}
                label="线宽"
                min={1}
              />
              <ProFormDependency
                name={[
                  ['border', 'radius'],
                  ['border', 'width'],
                ]}
              >
                {({ border }) => {
                  return (
                    <ProFormDigit
                      name={['innerBorder', 'radius']}
                      label="半径"
                      min={10}
                      max={border.radius - border.width}
                    />
                  )
                }}
              </ProFormDependency>
            </ProForm.Group>

            <ProForm.Group title="内环线配置">
              <ProFormSwitch
                label="是否显示"
                name={['innerLoopLine', 'visible']}
              />
              <ProFormColorPicker
                name={['innerLoopLine', 'color']}
                label="颜色"
              />
              <ProFormDigit
                name={['innerLoopLine', 'width']}
                label="线宽"
                min={1}
              />
              <ProFormDigit
                name={['innerLoopLine', 'radius']}
                label="半径"
                min={10}
                max={150}
              />
            </ProForm.Group>

            <ProForm.Group title="五角星配置">
              <ProFormSwitch
                label="是否显示"
                name={['fiveStar', 'visible']}
              />
              <ProFormColorPicker
                name={['fiveStar', 'color']}
                label="颜色"
              />
              <ProFormDigit
                name={['fiveStar', 'size']}
                label="大小"
                min={20}
                max={50}
              />
            </ProForm.Group>

            <ProForm.Group title="主文字配置">
              <ProFormSwitch
                label="是否显示"
                name={['text', 'visible']}
              />
              <ProFormColorPicker
                name={['text', 'color']}
                label="颜色"
              />

              <ProFormDigit
                name={['text', 'radius']}
                label="半径"
                min={10}
              />

              <ProFormText
                name={['text', 'text']}
                label="文案"
              />

              <ProFormDigit
                name={['text', 'fontSize']}
                label="字体大小"
                min={10}
              />

              <ProFormDigit
                name={['text', 'startDegree']}
                label="字体开始角度"
                min={0}
                max={90}
              />

              <ProFormDigit
                name={['text', 'fontWeight']}
                label="字体粗细"
                min={300}
              />
            </ProForm.Group>

            <ProForm.Group title="副文字配置">
              <ProFormSwitch
                label="是否显示"
                name={['subText', 'visible']}
              />
              <ProFormColorPicker
                name={['subText', 'color']}
                label="颜色"
              />

              <ProFormText
                name={['subText', 'text']}
                label="文案"
              />

              <ProFormDigit
                name={['subText', 'fontSize']}
                label="字体大小"
                min={10}
              />

              <ProFormDigit
                name={['subText', 'distance']}
                label="距离"
                tooltip="距离中心点的距离"
                min={10}
              />

              <ProFormDigit
                name={['subText', 'fontWeight']}
                label="字体粗细"
                min={300}
              />
            </ProForm.Group>

            <ProForm.Group title="中心文字配置">
              <ProFormSwitch
                label="是否显示"
                name={['centerText', 'visible']}
                tooltip="中心文字与五角星请不要同时显示"
              />
              <ProFormColorPicker
                name={['centerText', 'color']}
                label="颜色"
              />

              <ProFormText
                name={['centerText', 'text']}
                label="文案"
              />

              <ProFormDigit
                name={['centerText', 'fontSize']}
                label="字体大小"
                min={10}
              />

              <ProFormDigit
                name={['subText', 'fontWeight']}
                label="字体粗细"
                min={300}
              />
            </ProForm.Group>

            <ProForm.Group title="序列号配置">
              <ProFormSwitch
                label="是否显示"
                name={['serNo', 'visible']}
              />
              <ProFormColorPicker
                name={['serNo', 'color']}
                label="颜色"
              />

              <ProFormDigit
                name={['serNo', 'radius']}
                label="半径"
                min={10}
              />

              <ProFormText
                name={['serNo', 'text']}
                label="文案"
              />

              <ProFormDigit
                name={['serNo', 'fontSize']}
                label="字体大小"
                min={10}
              />

              <ProFormDigit
                name={['serNo', 'startDegree']}
                label="字体开始角度"
                min={0}
                max={90}
              />

              <ProFormDigit
                name={['serNo', 'fontWeight']}
                label="字体粗细"
                min={300}
              />
            </ProForm.Group>
          </ProForm>
        </Card>
      </Card>
    </div>
  )
}
