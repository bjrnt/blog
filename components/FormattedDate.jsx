const format = require('date-fns/format');

export default function Date({ date }) {
    return <span>
        {format(date, 'Do of MMMM, YYYY')}
    </span>
}
