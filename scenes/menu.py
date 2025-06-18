import pygame
import sys

class MenuScene:
    def __init__(self, screen):
        self.screen = screen
        self.next_scene = None
        self.next_scene_args = {}
        self.font = pygame.font.SysFont(None, 60)
        self.buttons = [
            {'text': '开始游戏', 'rect': pygame.Rect(412, 200, 200, 60), 'scene': 'game'},
            {'text': '设置', 'rect': pygame.Rect(412, 300, 200, 60), 'scene': 'settings'},
            {'text': '退出', 'rect': pygame.Rect(412, 400, 200, 60), 'scene': None}
        ]

    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            x, y = event.pos
            for btn in self.buttons:
                if btn['rect'].collidepoint(x, y):
                    if btn['scene'] == 'game':
                        self.next_scene = 'game'
                        self.next_scene_args = {}
                    elif btn['scene'] == 'settings':
                        self.next_scene = 'settings'
                        self.next_scene_args = {}
                    elif btn['scene'] is None:
                        pygame.quit()
                        sys.exit()

    def update(self):
        pass

    def draw(self):
        self.screen.fill((173, 216, 230))
        title = self.font.render('捕鱼能手', True, (0, 0, 128))
        self.screen.blit(title, (412, 100))
        for btn in self.buttons:
            pygame.draw.rect(self.screen, (0, 128, 255), btn['rect'])
            txt = self.font.render(btn['text'], True, (255, 255, 255))
            self.screen.blit(txt, (btn['rect'].x + 20, btn['rect'].y + 10)) 