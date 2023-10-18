/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fluxo').del()
  await knex('fluxo').insert([
    {data: "2023-09-01", valor: "1000", tipo: "entrada"},
    {data: "2023-09-02", valor: "750", tipo: "entrada"},
    {data: "2023-09-03", valor: "1200", tipo: "saida"},
    {data: "2023-09-04", valor: "500", tipo: "entrada"},
    {data: "2023-09-05", valor: "800", tipo: "saida"},
    {data: "2023-09-06", valor: "900", tipo: "entrada"},
    {data: "2023-09-07", valor: "600", tipo: "saida"},
    {data: "2023-09-08", valor: "1100", tipo: "entrada"},
    {data: "2023-09-09", valor: "350", tipo: "entrada"},
    {data: "2023-09-10", valor: "950", tipo: "saida"},
    {data: "2023-09-11", valor: "200", tipo: "entrada"},
    {data: "2023-09-12", valor: "750", tipo: "entrada"},
    {data: "2023-09-13", valor: "600", tipo: "saida"},
    {data: "2023-09-14", valor: "850", tipo: "entrada"},
    {data: "2023-09-15", valor: "400", tipo: "saida"},
    {data: "2023-09-16", valor: "1100", tipo: "entrada"},
    {data: "2023-09-17", valor: "700", tipo: "entrada"},
    {data: "2023-09-18", valor: "900", tipo: "saida"},
    {data: "2023-09-19", valor: "550", tipo: "entrada"},
    {data: "2023-09-20", valor: "800", tipo: "saida"},
    {data: "2023-09-21", valor: "1000", tipo: "entrada"},
    {data: "2023-09-22", valor: "450", tipo: "saida"},
    {data: "2023-09-23", valor: "750", tipo: "entrada"},
    {data: "2023-09-24", valor: "300", tipo: "entrada"},
    {data: "2023-09-25", valor: "950", tipo: "saida"},
    {data: "2023-09-26", valor: "700", tipo: "entrada"},
    {data: "2023-09-27", valor: "850", tipo: "entrada"},
    {data: "2023-09-28", valor: "400", tipo: "saida"},
    {data: "2023-09-29", valor: "1200", tipo: "entrada"},
    {data: "2023-09-30", valor: "550", tipo: "entrada"}
  ]);
};
