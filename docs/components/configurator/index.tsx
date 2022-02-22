/**
 * compact: true
 * inline: true
 */
import { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import Card from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormColorPicker,
  ProFormMoney,
  ProFormDigit,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { Seal } from '@pansy/seal';
import styles from './index.less';

const sealTypeEnum = {
  company: '公司公章',
  personal: '个人私章'
};

const sealShapeEnum = {
  circle: '圆形',
  personal: '椭圆',
  ellipse: '方形'
};

export default () => {
  const sealRef = useRef<typeof Seal>();
  const sealContainerRef = useRef<HTMLDivElement>(null);

  const [options, setOptions] = useState<Record<string, any>>({})

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
        >
          <ProForm
            submitter={false}
            onValuesChange={(_, allValues) => {
              handleFormChange(allValues);
            }}
            initialValues={{
              type: 'company',
              shape: 'circle',
              color: 'red',
              width: 300,
              height: 300,
            }}
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

              <ProFormColorPicker name="color" label="印章颜色" />

              <ProFormDigit name="width" label="画布宽度" />

              <ProFormDigit name="height" label="画布高度" />
            </ProForm.Group>

          </ProForm>
        </Card>
      </Card>
    </div>
  )
}
