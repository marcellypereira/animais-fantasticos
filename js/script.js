import ScrollSuave from './module/scroll-suave.js';
import Accordion from './module/accordion.js';
import TabNav from './module/tabnav.js';
import Modal from './module/modal.js';
import Tooltip from './module/tooltip.js';
import DropdownMenu from './module/dropdown-menu.js';
import MenuMobile from './module/menu-mobile.js';
import Functionamento from './module/funcionamento.js';
import fetchAnimais from './module/fetch-animais.js';
import fetchBitcoin from './module/fetch-bitcoin.js';
import ScrollAnima from './module/scroll-anima.js';
import SlideNav from './module/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Functionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./animaisapi.json', '.numero-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
