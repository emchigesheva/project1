# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import time

from django.core.management.base import BaseCommand
from django.db import connections


class Command(BaseCommand):
    help = 'Check DB status'

    def handle(self, *args, **options):
        counter = 0
        max_counter = 60

        while counter < max_counter:
            try:
                connection = connections['default']
                connection.connect()
                connection.close()
                self.stdout.write('DB is alive')
                break
            except Exception as err:
                self.stderr.write(str(err))
                self.stderr.write('DB is dead, wait for {} sec'.format(max_counter - counter))
                counter += 1
                time.sleep(1)
