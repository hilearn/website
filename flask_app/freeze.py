import adddeps # noqa
from flask_frozen import Freezer
from flask_app.app import app
import shutil
import os

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
    source = "flask_app/build/"
    destination = "docs"
    file_names = os.listdir(source)

    for file_name in file_names:
        src_file = os.path.join(source, file_name)
        dst_file = os.path.join(destination, file_name)
        if os.path.exists(dst_file):
            try:
                shutil.rmtree(dst_file)
            except NotADirectoryError:
                os.remove(dst_file)
        shutil.move(src_file, destination)
