/**
 * compact: true
 * inline: true
 */
import { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import Card from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormColorPicker,
  ProFormDigit,
  ProFormSwitch,
} from '@ant-design/pro-form';
// @ts-ignore
import { Seal } from '@pansy/seal';
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
  type: 'company',
  shape: 'circle',
  color: 'red',
  width: 300,
  height: 300,
  border: {
    visible: true,
    color: 'red',
    width: 6,
  },
  innerBorder: {
    visible: true,
    color: 'red',
    width: 1,
  },
  innerLoopLine: {
    visible: false,
    color: 'red',
    width: 2,
  },
  fiveStar: {
    visible: true,
    color: 'red',
  },
  text: {
    visible: true,
    color: 'red',
  },
  subText: {
    visible: true,
    color: 'red',
  },
}

export default () => {
  const sealRef = useRef<typeof Seal>();
  const sealContainerRef = useRef<HTMLDivElement>(null);

  const formRef = useRef<ProFormInstance>();

  const [options, setOptions] = useState<Record<string, any>>({});

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
    });
  }

  const handleFormChange = (values: Record<string, any>) => {
    setOptions(values);
  }

  return (
    <div className={styles.main}>
      <Card split="vertical" headerBordered bordered style={{ height: '100%'}}>
        <Card colSpan="400px" layout="center">
          <div ref={sealContainerRef} />
        </Card>
        <Card
          title="配置面板"
          extra={<Button type="link" size="small">拷贝配置</Button>}
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

              <ProFormColorPicker
                name="color"
                label="印章颜色"
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
            </ProForm.Group>
          </ProForm>
        </Card>
      </Card>
    </div>
  )
}
