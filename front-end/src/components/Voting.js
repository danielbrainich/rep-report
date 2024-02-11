function Voting({ info, name }) {

    const hasError = info?.error || name?.error;

    return (
        <div className="container d-flex flex-column vh-100">
            <div className="row flex-grow-1 mx-lg-5 px-lg-5">
                    {!hasError && info && name ? (
                        <div className="mt-md-5 pt-md-5">
                            <h4 className="pb-2">Voting</h4>
                            <p>
                                The following is a high-level voting summary for Rep. {name} for her entire tenure in Congress. More voting info is coming to this site soon! This info comes
                                from <a href="https://www.propublica.org/" target="_blank" rel="noopener noreferrer">ProPublica</a>.
                            </p>

                            <div className="my-4" style={{ borderBottom: '1px solid black', margin: '20px 0' }}></div>

                            <div className="pb-2 d-flex flex-column">
                                <h5 className="pb-2">Summary</h5>
                                <div className="col">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Missed vote percentage</th>
                                                <td className="text-end">{Math.round(info.missed_votes_pct)}%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Votes with party percentage</th>
                                                <td className="text-end">{Math.round(info.votes_with_party_pct)}%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Votes against party percentage</th>
                                                <td className="text-end">{Math.round(info.votes_against_party_pct)}%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total present votes</th>
                                                <td className="text-end">{info.total_present}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total votes</th>
                                                <td className="text-end">{info.total_votes}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                ) : (
                    <div className="text-center">
                        <p>Unable to load voting information. Please check back later.</p>
                    </div>
                )}
            </div>
                <div className="text-center mb-4">
                    Created by <a href="https://www.danielbrainich.com" target="_blank" rel="noopener noreferrer">@danielbrainich</a>
                </div>
            </div>
    );
}

export default Voting;
