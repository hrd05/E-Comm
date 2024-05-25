import React from 'react';

const ConcertTable = () => {
    const concertData = [
        { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE', action: 'BUY TICKETS' },
        { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE', action: 'BUY TICKETS' },
        { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE', action: 'BUY TICKETS' },
        { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION', action: 'BUY TICKETS' },
        { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA', action: 'BUY TICKETS' },
        { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION', action: 'BUY TICKETS' }
    ];

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Venue</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {concertData.map((concert, index) => (
                    <tr key={index}>
                        <td>{concert.date}</td>
                        <td>{concert.location}</td>
                        <td>{concert.venue}</td>
                        <td><a href="#" className='btn btn-outline-dark'>{concert.action}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ConcertTable;
