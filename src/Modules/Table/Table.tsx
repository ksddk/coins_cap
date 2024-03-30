import styles from './Home.module.css';
import { Table } from 'antd';

export const CoinTable = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    }
  ];

  const columns = [
    {
      title: 'Coin symbol',
      dataIndex: 'symbol',
      key: 'symbol'
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo'
    },
    {
      title: 'Price $',
      dataIndex: 'priceUsd',
      key: 'priceUsd'
    },
    {
      title: 'Market cap',
      dataIndex: 'marketCapUsd',
      key: 'marketCapUsd'
    },
    {
      title: '24h %',
      dataIndex: 'changePercent24Hr',
      key: 'changePercent24Hr'
    },
    {
      title: 'Add button',
      dataIndex: 'addButton',
      key: 'addButton'
    }
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
