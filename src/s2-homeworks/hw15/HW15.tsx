import React, { useEffect, useState } from 'react';
import s2 from '../../s1-main/App.module.css';
import s from './HW15.module.css';
import axios, { AxiosResponse } from 'axios';
import SuperPagination from './common/c9-SuperPagination/SuperPagination';
import { useSearchParams } from 'react-router-dom';
import SuperSort from './common/c10-SuperSort/SuperSort';
import { Loader } from '../hw10/Loader';

type ResponseType = {
  techs: TechType[];
  totalCount: number;
};

type TechType = {
  id: number;
  tech: string;
  developer: string;
};

type ParamsType = {
  sort: string;
  page: number;
  count: number;
};

const getTechs = (params: ParamsType): Promise<AxiosResponse<ResponseType> | void> => {
  return axios
    .get<{ techs: TechType[]; totalCount: number }>(
      'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test3',
      { params }
    )
    .catch(e => {
      alert(e.response?.data?.errorText || e.message);
    });
};

const HW15 = () => {
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(4);
  const [idLoading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(100);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<TechType[]>([]);

  const sendQuery = (params: any) => {
    setLoading(true);
    getTechs(params)
      .then(res => {
        if (res) {
          setTotalCount(res.data.totalCount);
          setTechs(res.data.techs);
        }
      })
      .finally(() => setLoading(false));
  };

  const onChangePagination = (newPage: number, newCount: number) => {
    setPage(newPage);
    setCount(newCount);
    sendQuery({ sort: sort, page: newPage, count: newCount });
    setSearchParams({ page: String(newPage), count: String(newCount) });
  };

  const onChangeSort = (newSort: string) => {
    setSort(newSort);
    setPage(1); // при сортировке сбрасывать на 1 страницу
    sendQuery({ sort: newSort, page: page, count: count });
    setSearchParams({ page: String(page), count: String(count) });
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    sendQuery({ page: params.page, count: params.count });
    setPage(+params.page || 1);
    setCount(+params.count || 4);
  }, []);

  const mappedTechs = techs.map(t => (
    <div key={t.id} className={s.row}>
      <div id={'hw15-tech-' + t.id} className={s.tech}>
        {t.tech}
      </div>
      <div id={'hw15-developer-' + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ));

  return (
    <div id={'hw15'}>
      <div className={s2.hwTitle}>Homework #15</div>
      <div className={s.hw15Wrapper}>
        {idLoading && <Loader customMainStyle={s.spinnerStyle} />}
        <div className={idLoading ? s.opacity : ''}>
          <div className={s2.hw}>
            <SuperPagination
              page={page}
              isLoading={idLoading}
              itemsCountForPage={count}
              totalCount={totalCount}
              onChange={onChangePagination}
            />
            <div className={s.rowHeader}>
              <div className={s.techHeader}>
                tech
                <SuperSort sort={sort} value={'tech'} onChange={onChangeSort} />
              </div>
              <div className={s.developerHeader}>
                developer
                <SuperSort sort={sort} value={'developer'} onChange={onChangeSort} />
              </div>
            </div>
            {mappedTechs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW15;
