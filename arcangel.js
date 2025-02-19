function arcangel (numero)
  {
    var primo
    var i
    
for(i=numero-1; i>=2; i=i-1 )
{
if ( numero % i ==0 )
{
  primo = false;
}
  
}
    primo = true;
    return primo ;
  }
