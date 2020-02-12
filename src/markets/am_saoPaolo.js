import { Market } from '../mainClass'

// SAO PAULO
const saoPaulo = new Market('America', 'Sao_Paulo', '10:00', '17:55')
saoPaulo.setHolidays([
  'Jan 1',
  'Feb 24',
  'Feb 25',
  'Feb 26',
  'Aps 10',
  'Apr 21',
  'May 1',
  'Jun 11',
  'Jul 9',
  'Sep 7',
  'Oct 12',
  'Nov 2',
  'Nov 20',
  'Dec 24',
  'Dec 25',
  'Dec 31'
])

// saoPaulo.getCountDown(saoPaulo.close)
// saoPaulo.getCountDown(saoPaulo.open)

export default saoPaulo