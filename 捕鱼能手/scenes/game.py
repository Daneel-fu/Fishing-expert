import pygame
import random
import time

class Fish:
    def __init__(self, img, x, y, speed):
        self.img = img
        self.x = x
        self.y = y
        self.speed = speed
        self.rect = self.img.get_rect(topleft=(x, y))
        self.clicked = False

    def update(self):
        self.y -= self.speed
        self.rect.y = self.y

    def draw(self, screen):
        screen.blit(self.img, (self.x, self.y))

class Bomb:
    def __init__(self, img, x, y, speed):
        self.img = img
        self.x = x
        self.y = y
        self.speed = speed
        self.rect = self.img.get_rect(topleft=(x, y))
        self.clicked = False

    def update(self):
        self.y -= self.speed
        self.rect.y = self.y

    def draw(self, screen):
        screen.blit(self.img, (self.x, self.y))

class GameScene:
    def __init__(self, screen, time=10, difficulty='普通'):
        self.screen = screen
        self.next_scene = None
        self.next_scene_args = {}
        self.font = pygame.font.SysFont(None, 40)
        self.score = 0
        self.start_time = pygame.time.get_ticks()
        self.total_time = time * 60 * 1000  # ms
        self.difficulty = difficulty
        self.fish_img = pygame.Surface((60, 40))
        self.fish_img.fill((255, 200, 0))
        self.bomb_img = pygame.Surface((40, 40))
        self.bomb_img.fill((0, 0, 0))
        self.fishes = []
        self.bombs = []
        self.spawn_timer = 0
        self.spawn_interval = 1000 if difficulty == '容易' else 700 if difficulty == '普通' else 400

    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            x, y = event.pos
            for fish in self.fishes:
                if fish.rect.collidepoint(x, y) and not fish.clicked:
                    fish.clicked = True
                    self.score += 10
            for bomb in self.bombs:
                if bomb.rect.collidepoint(x, y) and not bomb.clicked:
                    bomb.clicked = True
                    self.score -= 20

    def update(self):
        now = pygame.time.get_ticks()
        # 生成鱼和炸弹
        if now - self.spawn_timer > self.spawn_interval:
            if random.random() < 0.8:
                x = random.randint(50, 900)
                self.fishes.append(Fish(self.fish_img, x, 500, random.randint(4, 8)))
            else:
                x = random.randint(50, 900)
                self.bombs.append(Bomb(self.bomb_img, x, 500, random.randint(4, 8)))
            self.spawn_timer = now
        # 更新鱼和炸弹
        for fish in self.fishes:
            fish.update()
        for bomb in self.bombs:
            bomb.update()
        # 移除已点击或飞出屏幕的
        self.fishes = [f for f in self.fishes if f.y > -40 and not f.clicked]
        self.bombs = [b for b in self.bombs if b.y > -40 and not b.clicked]
        # 判断时间
        if now - self.start_time > self.total_time:
            self.next_scene = 'result'
            self.next_scene_args = {'score': self.score}

    def draw(self):
        self.screen.fill((135, 206, 250))
        # 画海浪
        pygame.draw.rect(self.screen, (0, 105, 148), (0, 500, 1024, 100))
        # 画鱼和炸弹
        for fish in self.fishes:
            fish.draw(self.screen)
        for bomb in self.bombs:
            bomb.draw(self.screen)
        # 分数和时间
        score_txt = self.font.render(f'分数: {self.score}', True, (0,0,0))
        self.screen.blit(score_txt, (30, 20))
        left_time = max(0, (self.total_time - (pygame.time.get_ticks() - self.start_time)) // 1000)
        time_txt = self.font.render(f'剩余时间: {left_time}s', True, (0,0,0))
        self.screen.blit(time_txt, (800, 20)) 