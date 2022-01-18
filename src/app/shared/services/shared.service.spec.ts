import { SharedService } from './shared.service';

describe('SharedService', () => {
  let sharedService: SharedService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  const routerSpy = jasmine.createSpyObj('HttpClient', ['navigate']);

  beforeEach(() => {
    sharedService = new SharedService(httpClientSpy, routerSpy);
  });

  it('should be created', () => {
    expect(sharedService).toBeTruthy();
  });

  it('should sum two numbers', () => {
    expect(sharedService.sum(3, 3)).toBe(6);
  });

  it('should call async API', () => {
    sharedService.callAsyncAPI('/api/test');
    expect(httpClientSpy.get).toHaveBeenCalledWith('/api/test');
  });

  it('should update title', () => {
    const stubValue = { title: 'test title' };
    spyOn(localStorage, 'setItem');
    spyOn(console, 'log');
    sharedService.update(stubValue);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'testItem',
      stubValue.title
    );
    expect(console.log).toHaveBeenCalledWith('value', stubValue);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
