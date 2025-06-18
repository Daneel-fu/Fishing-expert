import pygame

class SettingsScene:
    def __init__(self, screen):
        self.screen = screen
        self.next_scene = None
        self.next_scene_args = {}
        self.font = pygame.font.SysFont(None, 40)
        self.time_options = [1, 5, 10, 20, 30]
        self.difficulty_options = ['容易', '普通', '困难']
        self.selected_time = 10
        self.selected_difficulty = '普通'
        self.start_btn = pygame.Rect(350, 500, 150, 50)
        self.cancel_btn = pygame.Rect(550, 500, 150, 50)

    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            x, y = event.pos
            for i, t in enumerate(self.time_options):
                if pygame.Rect(200 + i*120, 150, 100, 50).collidepoint(x, y):
                    self.selected_time = t
            for i, d in enumerate(self.difficulty_options):
                if pygame.Rect(200 + i*180, 250, 150, 50).collidepoint(x, y):
                    self.selected_difficulty = d
            if self.start_btn.collidepoint(x, y):
                self.next_scene = 'game'
                self.next_scene_args = {'time': self.selected_time, 'difficulty': self.selected_difficulty}
            if self.cancel_btn.collidepoint(x, y):
                self.next_scene = 'menu'
                self.next_scene_args = {}

    def update(self):
        pass

    def draw(self):
        self.screen.fill((245, 245, 245))
        title = self.font.render('配置页面（捕鱼能手）', True, (0, 0, 0))
        self.screen.blit(title, (350, 50))
        # 时间选项
        self.screen.blit(self.font.render('训练时间', True, (0,0,0)), (100, 150))
        for i, t in enumerate(self.time_options):
            rect = pygame.Rect(200 + i*120, 150, 100, 50)
            color = (0,128,255) if t == self.selected_time else (180,180,180)
            pygame.draw.rect(self.screen, color, rect)
            self.screen.blit(self.font.render(f'{t}分钟', True, (255,255,255)), (rect.x+10, rect.y+10))
        # 难度选项
        self.screen.blit(self.font.render('训练难度', True, (0,0,0)), (100, 250))
        for i, d in enumerate(self.difficulty_options):
            rect = pygame.Rect(200 + i*180, 250, 150, 50)
            color = (0,128,255) if d == self.selected_difficulty else (180,180,180)
            pygame.draw.rect(self.screen, color, rect)
            self.screen.blit(self.font.render(d, True, (255,255,255)), (rect.x+30, rect.y+10))
        # 按钮
        pygame.draw.rect(self.screen, (0,200,0), self.start_btn)
        self.screen.blit(self.font.render('开始训练', True, (255,255,255)), (self.start_btn.x+10, self.start_btn.y+10))
        pygame.draw.rect(self.screen, (200,0,0), self.cancel_btn)
        self.screen.blit(self.font.render('取消', True, (255,255,255)), (self.cancel_btn.x+30, self.cancel_btn.y+10)) 