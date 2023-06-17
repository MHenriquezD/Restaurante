function verificar_pago(total_pagar,pago_anterior/*,pago_nuevo*/){
    total_pago = total_pagar - pago_anterior;
    return total_pago;
}

function verificar_suelto(pago, total_pagar){
    if(pago < 0){
        dinero = pago + total_pagar;
    }else{
        dinero = 0;
    }
    return dinero;
}