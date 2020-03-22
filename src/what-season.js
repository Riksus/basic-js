module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'; 
  try { date.getTime(); } catch(e) { throw new Error(e); }
  let mounth = date.getMonth() + 1;
  if (mounth < 3 || mounth == 12) return 'winter';
    else if (mounth < 6) return 'spring';
      else if ( mounth < 9) return 'summer';
        else if (mounth < 12 ) return "autumn";
};
