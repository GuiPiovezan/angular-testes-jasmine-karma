import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');

    //expect(id).toContain('app-');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiplestimes`, () => {
    const service = new UniqueIdService();
    // const firstId = service.generateUniqueIdWithPrefix('app');
    // const secondId = service.generateUniqueIdWithPrefix('app');

    // // firstId não seja secondId
    // expect(firstId).not.toBe(secondId);

    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    // Esperamos que o tamanho do conjunto seja 50
    expect(ids.size).toBe(50);
  });
});

/* Estrutura de escrita de teste: #blablabla should blablabla when blablabla */
