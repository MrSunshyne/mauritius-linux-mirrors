import type {IResponse} from './../types/types';
export async function load() {

  const data = await fetch(`https://raw.githubusercontent.com/ishwon/mirror.cloud.mu/main/public/mirrors.json`);
  const json: IResponse = await data.json();
  const mirrors = json["data"];

  return {
    mirrors,
    meta: json
  };
}