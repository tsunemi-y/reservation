import React from 'react'
import { css } from '@emotion/css';

const reservationDate = css({
    backgroundColor: '#F2F2F2',
    borderRadius: '5px',
    height: '50vh',
    margin: '0 auto',
    width: '50%',
});

const dateCardFlex = css({
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    margin: '0 auto',
});

const dateCard = css({
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxSizing: 'border-box',
    height: '25%',
    marginTop: '2rem',
    marginBottom: '2rem',
    marginRight: '.2rem',
    marginLeft: '.2rem',
    width: '48%',
});

const date = css({
    margin: '0',
    marginTop: '.3rem',
});

const week = css({
    margin: '0',
});

const state = css({
    margin: '0',
    marginBottom: '.3rem',
});

const Reservation: React.FC = () =>
    <>
        <section>
            <h1  className="mb-3">
                来店日時の選択
            </h1>
            {/* 日時の予約検索 start */}
            <div className={reservationDate}>
                
                <div className={dateCardFlex}>

                    <div className={dateCard}>
                        <p className={ date }>8/8</p>
                        <p className={ week }>日</p>
                    </div>

                    <div className={dateCard}>
                        <p className={ date }>8/8</p>
                        <p className={ week }>日</p>
                    </div>

                    <div className={dateCard}>
                        <p className={ date }>8/8</p>
                        <p className={ week }>日</p>
                    </div>

                    <div className={dateCard}>
                        <p className={ date }>8/8</p>
                        <p className={ week }>日</p>
                    </div>

                </div>
                
            </div>
            {/* 日時の予約検索 end */}

        </section>
    </>
export default Reservation
