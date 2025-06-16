import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ViaCepService } from './via-cep.service';

describe('ViaCepService', () => {
  let service: ViaCepService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViaCepService]
    });

    service = TestBed.inject(ViaCepService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica se não ficou nenhuma requisição pendente
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar dados do CEP corretamente', () => {
    const cep = '01001000';
    const mockResponse = {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107'
    };

    service.buscar(cep).subscribe((dados) => {
      expect(dados).toEqual(mockResponse);
    });

    // Espera que uma requisição GET para a URL correta tenha sido feita
    const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json/`);
    expect(req.request.method).toBe('GET');

    // Responde a requisição com o mock
    req.flush(mockResponse);
  });

  it('deve tratar erro 404 ao buscar CEP', () => {
    const cep = '00000000';

    service.buscar(cep).subscribe({
      next: () => fail('esperava erro 404'),
      error: (error) => {
        expect(error.status).toBe(404);
      }
    });

    const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json/`);
    req.flush('CEP não encontrado', { status: 404, statusText: 'Not Found' });
  });
});
