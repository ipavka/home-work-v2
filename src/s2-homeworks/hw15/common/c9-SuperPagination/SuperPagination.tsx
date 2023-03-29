import React, { ChangeEvent } from 'react';
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect';
import { Pagination } from '@mui/material';
import s from './SuperPagination.module.css';

export type SuperPaginationPropsType = {
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
  id?: string;
  isLoading?: boolean;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  isLoading,
  id = 'hw15',
}) => {
  const lastPage = Math.trunc(totalCount / itemsCountForPage);

  const onChangeCallback = (event: any, page: number) => {
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(page, Number(event.currentTarget.value));
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        page={page}
        count={lastPage}
        disabled={isLoading}
        onChange={onChangeCallback}
        color="primary"
        shape="rounded"
        hideNextButton
        hidePrevButton
      />
      <div className={s.textWrapper}>
        <span className={s.text1}>Показать</span>

        <SuperSelect
          id={id + '-pagination-select'}
          value={itemsCountForPage}
          options={[
            { id: 4, value: 4 },
            { id: 7, value: 7 },
            { id: 10, value: 10 },
          ]}
          onChange={onChangeSelect}
        />

        <span className={s.text2}>строк(и)</span>
      </div>
    </div>
  );
};

export default SuperPagination;
