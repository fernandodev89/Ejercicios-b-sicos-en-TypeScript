function ejemploSplit(){
    let texto: string = "Fernando,Contreras,Estudiante de Ingenieria,I Love you Shakira,I Love you Javascript";

    let partes: string[] = texto.split(',');

    console.log("Resultado del split:", partes);

}

ejemploSplit();